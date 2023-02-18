SHELL_FOLDER=$(cd "$(dirname "$0")";pwd) # 脚本当前绝对路径

cd ${SHELL_FOLDER}/../../../ # 去到 sdk 根目录
npm run link

cd ${SHELL_FOLDER}/../ # example 根目录
npx yalc add @kiyonamiy/js-demo-package
npx yalc update @kiyonamiy/js-demo-package
