# dependencies-to-tree
The idea of this project is to be able to visualize complex dependencies graphs.

The project is available at: https://adrianabreu.github.io/dependencies-to-tree/

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
Just paste your json according to the model and click the button!