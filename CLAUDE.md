（交流可以用英文，本文档中文，保留这句）
编写一份区块链稳定币智能合约等相关主题的由浅入深的教程html，要包含大量的习题和参考答案（答案默认折叠）。先划分大纲，然后逐节逐小节细化展开。
当需要时，可以通过 `gemini -p "深入回答：<要问的问题>" -m gemini-2.5-pro` 来获取 gemini-2.5-pro 的参考意见(gemini 系列只问2.5-pro 不问别人)
当需要时，可以通过 `llm "深入回答:<要问的问题>" -m 4.1` 来获取 GPT-4.1 的参考意见(还可以问 4o `-m 4o`)

## 进度追踪
- [x] 引言章节完成（历史、概念、市场格局）
- [x] 第一章完成（区块链基础与稳定币）
  - [x] 共识机制对稳定币的影响
  - [x] 智能合约执行模型跨链对比（UTXO vs 账户模型深入分析）
  - [x] 实践：Hello Stablecoin部署
  - [x] Gas经济学与优化策略
- [ ] 第二章进行中（稳定币分类与经济模型）
- [ ] 第三章（ERC-20及扩展）
- [ ] 第四章（抵押型稳定币设计）
- [ ] 第五章（数学模型与控制理论）

## 技术实现细节
- 代码块：支持语法高亮（Prism.js），默认折叠展示
- 练习答案：点击展开/折叠
- 术语解释：括号内简短说明
- 表格格式：用于对比和数据展示

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.