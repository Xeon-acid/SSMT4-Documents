# 为什么选择Rust + Tauri架构来开发SSMT4

- 基于前端渲染技术与Blender进行API交互的更强的完全可控蓝图系统的Mod生成蓝图功能
- 由Rust + Tauri 带来的更小的体积，更快的速度，更高的安全性，跨平台，等等等等
- 使用前端技术可实现任意复杂视觉效果，突破WinUI3效果限制，更精美的界面
- 开发十分方便，AI能够非常成熟的处理前端内容生成，实时修改并查看预览，解放开发效率
- 更简单方便快捷的打包发布流程，开发者友好
- 相比于SSMT3来说使用Rust + Tauri实现全方面的架构升级，使得在WinUI3上受限制的一些视觉效果能够轻易使用前端技术实现
- 对于Mod制作来说的一些复杂需求，也只有前端技术能够很好的展现
- 对于Mod管理来说，前端技术可以实现非常优质的Mod管理功能
- 为未来做好准备，虽然SSMT3仅基于3Dmigoto但是未来可能会出现更强的DX12、Vulkan、Mental FX等Mod制作技术，这次转用跨平台架构就是为未来做准备的(虽然这可能是遥遥无期，但是鉴于SSMT是一个兴趣维护的项目，开发中的乐趣更加重要)。
- 练习编程技术，尤其是Rust以及前端相关技术，为未来其他工具开发、网站开发等做好准备。

总结来说，这是一次革命性的架构变更，将彻底解放由WinUI3架构限制导致部分需求无法实现的问题，并且大大优化了开发和运维成本，几乎每个方面都有巨大的提升。

Python也能实现上述需求，为什么不用基于Python的架构，就像XXMI系列工具一样？

因为Python能实现的效果过于简陋，Rust + Tauri相当于Pro Max版本的Python，能实现更多效果，即使成本确实很高，但我相信对于充满热爱的开发者来说，学习成本并不是问题，何况还有AI的辅助，在SSMT4的开发中我几乎全程使用Gemini3 Pro进行开发，效率提升了几百倍，边看小说边和AI对线就把工具开发好了。

# 成也WinUI3，败也WinUI3

技术都是一步步发展的嘛，从一开始的黑框框python脚本，到后来的C++控制台程序，再到python写的简陋gui，再到WinForm做的简陋GUI，之前的目标是做一个让人用着不那么反人类的工具

然后WinForm架构开发的MMT、DBMT最频繁的时候，XXMI Launcher和gui_collect面世了，其python编写的gui视觉效果远超WinForm，所以不得不升级到WinUI3

WinUI3可以用简单的代码实现复杂的效果，因为所有组件都是早已封装好的，但是问题就出在了这个封装上，导致如果想要实现复杂的效果，就需要特别深入底层去处理屎山WinUI3的奇怪BUG，严重影响开发进度。

随着开发的进行，各种新的需求在WinUI3架构上已经行不通了，核心问题如下：

1.3Dmigoto Loader.exe会被基于声誉的Smart Screen系统拦截，其每次更新都会触发，要不被拦截只能把注入代码像XXMI Launcher一样写到dll里而不是exe里

但是WinUI3天然缺少调用dll的权限，因为它被设计为不能在管理员模式下运行，否则很多功能和组件都会失效，例如打开文件夹和打开文件对话框

2.Mod管理功能需要复杂的页面效果和复杂的组件，WinUI3虽然内置的组件已经足够多了，但是无法满足天马行空般想法表达的需求，例如我要完全仿游戏内UI怎么办？比如XX Mod Manager那样的效果？XXMM的作者给出了答案：使用前端技术

XXMM的作者刚开始使用Electron开发做出了不错的效果，但是由于性能问题以及其它各种架构限制的瓶颈，最终也转为了Rust + Tauri开发，SSMT4就是从那里学到的架构和设计

3.在XXMI Launcher已经大规模普及的前提下，不管怎么开发也只能做出另一个XXMI Launcher出来，纵观目前市面上的启动器和管理器，基本都是这样的，且基础启动功能不一定有XXMI Launcher完善。

用户不会为了基础实用功能性去选择你的工具，唯一的出路就在界面的设计上，就好像保障大部分底层功能都可以使用的长得很丑的Android手机和保持美观一致设计的苹果手机一样，人们更多选择苹果的原因99%是因为其设计良好。

所以如果仅仅只是提供启动器的基础功能，那是一定没有竞争力的，必须在界面和交互设计上下功夫，用户才有可能选择你的工具

4.收益问题
虽然工具是免费开发，但是有收益当然是不错的动力。

用户不会为了实用性买单，除非能够用这个实用性的工具创造远超付出成本的利益，这是任何工具开发的铁律，在目前XXMI系列工具能够免费提供稳定功能的条件下，工具的基础价值会被市场经济压缩到维持再生产的基础成本。

解决此问题只能依靠提供情绪价值，用户一定会为额外的情绪价值买单，这是人类的天性。

综上，Rust + Tauri架构似乎成了唯一解，这里还有很多没有叙述到的东西，我懒得多废话了，反正你只需要知道新架构是被一大堆需求推着走的，我懒得在这里列出来，反正如果要继续开发下去的话，架构不得不换了。

5.我玩腻了WinUI3
WinUI3的缺点太多了，我不知道吐槽了多少次了，懒得吐槽了，反正这破玩意我看是没啥大用了。

不仅玩腻了WinUI3，甚至可以说SSMT系列工具我都懒得开发了，因为已经完成了那简单的90%，剩下的10%的难度是远超预料的，每突破一个小的功能都需要付出巨大的时间和精力，您猜怎么着，最后那10%的需求全部受限于WinUI3本身的限制导致无法进行开发，逼着我不得不换更灵活的前端架构（您总不能要求我用QT的QML或者Electron吧，那太笨重了）。

所以新项目是抱着玩儿的心态来做的，没想过收益问题，但是至少不能丢了面子，工具起码得长得好看，然后架构上具有优势，不然你底层的技术再厉害用户是不关心的，用户只能看到你的工具长得很丑，长得很丑 = 你很菜，这一点在MMT、DBMT的WinForm时代已经证实了。

# AI辅助编程

SSMT4全程使用Github Copilot的Gemini3 Pro(Preview)进行辅助开发，因为我是几乎一点不会Rust + Tauri以及前端这些技术。

# Tauri + Vue + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)