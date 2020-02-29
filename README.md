# dependencies-to-tree
The idea of this project is to be able to visualize complex dependencies graphs.


## Model
The model should contain the following properties:

```
{
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
}
```

## How to use it
Just parse the json and click the button!

## License