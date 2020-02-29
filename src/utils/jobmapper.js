export function mapJsonToNode(inputJson)
{
    let nodes = calculateYForNodes(calculateXForNodes(inputJson.jobs));
    let edges = calculateEdges(inputJson.jobs);

    return {
        nodes: transformToDrawableNodes(nodes),
        edges
    }

}

export function calculateEdges(jsonArray) {
    return jsonArray.filter(job =>  Array.isArray(job.dependencies)).map((job,i) => {
        return job.dependencies.map((dependency,j) => {
            return {
                id: (i + 'a') + (j + 'e'),
                source: dependency.jobName,
                target:job.jobName
            }
        });
    }).reduce((a,b) => a.concat(b));
}

export function calculateYForNodes(jsonArray) {
    let registeredWeights = {}
    let array = jsonArray.map(job => ({...job, y:+Array.isArray(job.dependencies)}));
    
    while(Object.keys(registeredWeights).length != jsonArray.length)
    {
            array = array
            .map(job => {
            if (job.y != 0) {
                let y = Math.max(...job.dependencies.map(e => registeredWeights[e.jobName])) +1;
                if (!isNaN(y)) {
                    registeredWeights[job.jobName] = y;
                    return {...job, y:  y};    
                } else {
                    return {...job};
                }
            } else {
                registeredWeights[job.jobName] = 0;
                return {...job};
            }
        });
    }
    return array;
}

export function calculateXForNodes(jsonArray) {
    let indexForRoot = 0;
    let registeredX = {};
    let array = jsonArray.map(job => {
        if (!Array.isArray(job.dependencies)) {
            registeredX[job.jobName] = indexForRoot;
            indexForRoot++;
            return {...job, x:registeredX[job.jobName]};
        } else {
            return {...job};
        }
    });

    while(Object.keys(registeredX).length != jsonArray.length) {
        array = array.map(job => {
            if (Array.isArray(job.dependencies)) {
                let x;
                if (job.dependencies.length === 1) {
                    x = registeredX[job.dependencies[0].jobName];
                } else {
                    x = Math.ceil(job.dependencies.map(j => registeredX[j.jobName]).reduce((a,b) => a + b) / job.dependencies.length);
                }
                if(!Number.isNaN(x) && Number.isInteger(x)) {
                    registeredX[job.jobName] = x;
                }
                return {...job, x:registeredX[job.jobName]};
            } else {
                return job;
            }
        });
    }
    return array;
}

export function transformToDrawableNodes(nodes) {
    let drawableNodes = nodes.map(job => ({id:job.jobName, label:job.jobName, x:job.x, y:job.y, size: 2}));

    let maxY = Math.max(...drawableNodes.map(d => d.y));
    let allNodes = []
    for (let i = 0; i <= maxY; i++) {
        let nodesAtILevel = drawableNodes.filter(d => d.y == i);
        let nodesTmp = [];
        let maxX = Math.max(...nodesAtILevel.map(d => d.x));
        for (let j = 0; j <= maxX; j++) {
            let nodesWithSameCoordinates = nodesAtILevel.filter(n => n.x == j);
            let length = nodesWithSameCoordinates.length;
           
            if (length > 1) {
                let step = 1 / length;
                for (let k = -1,l = 0; l < nodesWithSameCoordinates.length; k++, l++) {
                    nodesTmp = nodesTmp.concat({...nodesWithSameCoordinates[l], x: nodesWithSameCoordinates[l].x + (step * k)});
                }
                
            }
            else {
                nodesTmp = nodesTmp.concat([...nodesWithSameCoordinates]);
            }

        }
        allNodes = allNodes.concat(nodesTmp);
        
    }
    return allNodes;
}
