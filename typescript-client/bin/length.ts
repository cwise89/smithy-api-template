#!/usr/bin/env node

import {LengthCommand, StringWizardClient} from "@smithy-demo/string-client";

const client = new StringWizardClient({endpoint: process.argv[2]});

client.send(new LengthCommand({
    string: process.argv[3],
    limit: 10
})).catch((err) => {
    console.log("Failed with error: " + err);
    process.exit(1);
}).then((res) => {
   console.log("CODY RES: ", res.length)
});


