const core = require('@actions/core');
const github = require('@actions/github');

const { execFile } = require('child_process');

const exePath = __dirname+'/bin/eplc.exe';

var args = ['', '/o', '', '/obj', '/dll', '/set_epl_root', ''];

//获取变量
const file = core.getInput('file');
const output = core.getInput('output');

//设置命令行
args[0] = file;
args[2] = output;
args[6] = __dirname+'/bin/';

//运行可执行文件
const child = execFile(exePath, args, (error, stdout, stderr) => {
  if (error) {
    console.error(`failed: ${error}`);
    return;
  }
  console.log(`${stdout}`);
});

child.on('exit', (code) => {
    
});