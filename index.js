const core = require('@actions/core');
const github = require('@actions/github');


try {
    const customLabel = core.getInput('custom-label');
    console.log(customLabel)

    const labelstyle = core.getInput('label-style');
    console.log(label-style)
    core.setOutput("customlabel", customLabel);
    
    

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
