var config = require('config');

const dashButton = require('node-dash-button');
const execSync = require('child_process').execSync;

const dash = dashButton(config.get('DASH_MAC_ADDRESS'), null, null, 'all');

dash.on('detected', () => {
  const text='hello world';
    execSync(`echo ${text}`);
    console.log(text);
});
