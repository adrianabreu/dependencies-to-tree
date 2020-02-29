import { expect } from "chai"
import {calculateEdges, calculateYForNodes, calculateXForNodes, mapJsonToNode} from "../../src/utils/jobmapper";

describe("JobMapper", () => {
  let input = {
    "jobs": [
        {
            "jobName": "a"
        },
        {
            "jobName": "b",
            "dependencies": [
                {
                    "jobName": "a"
                }
            ]
        },
        {
            "jobName": "c",
            "dependencies": [
                {
                    "jobName": "b"
                }
            ]
        }
    ]
};
  it("should build edges from jobs with dependencies", () => {
    const edges = [{
        id: "0a0e",
        source: "a",
        target: "b"
    },{
        id: "1a0e",
        source: "b",
        target: "c"
    }];

    let actual = calculateEdges(input.jobs);
    expect(actual).to.deep.equal(edges);
  });

  it("should add proper heights to dependant nodes", () => {
    const nodes = [{
        "jobName": "a",
        "y": 0
    },{
        "jobName": "b",
        "dependencies": [
            {
                "jobName": "a"
            }
        ],
        "y": 1
    },
    {
        "jobName": "c",
        "dependencies": [
            {
                "jobName": "b"
            }
        ],
        "y": 2
    }];

    let actual = calculateYForNodes(input.jobs);
    expect(actual).to.deep.equal(nodes);
  });

  it("should add proper heights even with unordered jsons", () => {
      let unsortedInput = {
        "jobs": [
            {
                "jobName": "a"
            },
            {
                "jobName": "c",
                "dependencies": [
                    {
                        "jobName": "b"
                    }
                ]
            },
            {
                "jobName": "b",
                "dependencies": [
                    {
                        "jobName": "a"
                    }
                ]
            }
        ]
    };
    const nodes = [{
        "jobName": "a",
        "y": 0
    },
    {
        "jobName": "c",
        "dependencies": [
            {
                "jobName": "b"
            }
        ],
        "y": 2
    },
    {
        "jobName": "b",
        "dependencies": [
            {
                "jobName": "a"
            }
        ],
        "y": 1
    }];

    let actual = calculateYForNodes(unsortedInput.jobs);
    expect(actual).to.deep.equal(nodes);
  });
  
  it("should add proper x to sample graph", () => {
    const nodes = [{
        "jobName": "a",
        "x": 0
    },
    {
        "jobName": "b",
        "dependencies": [
            {
                "jobName": "a"
            }
        ],
        "x": 0
    },
    {
        "jobName": "c",
        "dependencies": [
            {
                "jobName": "b"
            }
        ],
        "x": 0
    }];

    let actual = calculateXForNodes(input.jobs);
    expect(actual).to.deep.equal(nodes);
  });

  it("should add proper x to complex graph", () => {

    const complexInput = [{
        "jobName": "a"
    },{
        "jobName": "b"
    },{
        "jobName": "c",
        "dependencies": [
            {
                "jobName": "a"
            },
            {
                "jobName": "b"
            }
        ]
    }]
    const nodes = [{
        "jobName": "a",
        "x": 0
    },{
        "jobName": "b",
        "x": 1
    },{
        "jobName": "c",
        "dependencies": [
            {
                "jobName": "a"
            },
            {
                "jobName": "b"
            }
        ],
        "x": 1
    }];

    let actual = calculateXForNodes(complexInput);
    expect(actual).to.deep.equal(nodes);
  });

  it("should transform to nodes and edges sample graph", () => {
    const expected = {
        nodes: [{
        "id": "a",
        "label": "a",
        "x": 0,
        "y": 0,
        "size": 2
    },
    {
        "id": "b",
        "label": "b",
        "x": 0,
        "y": 1,
        "size": 2
    },
    {
        "id": "c",
        "label": "c",
        "x": 0,
        "y": 2,
        "size": 2
    }],
    edges: [{
        id: "0a0e",
        source: "a",
        target: "b"
    },{
        id: "1a0e",
        source: "b",
        target: "c"
    }]
};

    let actual = mapJsonToNode(input);
    expect(actual).to.deep.equal(expected);
  });

});