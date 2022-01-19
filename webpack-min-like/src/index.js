const path = require('path');
const process = require('process');

// 读取配置
const getPackConfig = () => {
  const configPath = path.resolve(process.cwd(), 'pack.config.js');
  const config = require(configPath);
  const { entry, output: { path: entryPath, name } } = config;
  return {
    entry: path.resolve(process.cwd(), entry),
    output: {
      path: path.resolve(process.cwd(), entryPath),
      name
    },
  };
}

// 分析生成依赖map

// 打包build

// 打包结果写入

// 主流程-调度
const main = () => {
  const config = getPackConfig();
  console.log(config);
}

main();