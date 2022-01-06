---
id: image-fill
title: 导出面板使用指南 — 占位图填充
---

### 背景
PAG 支持替换图片，设计师需要指定哪些图片可以被替换，哪些图片不可以被替换；以及指定替换时的填充模式（分辨率/长宽比不一致时，该用什么样的填充模式进行填充）。

### 占位图替换格式说明
替换格式分为三种： <br/>
A、替换: 添加标签 {"videoTrack": 1} <br/>
B、不替换: 添加标签 {"noReplace": 1} <br/>
C、默认: 不添加标签 <br/>
(注：PAG里只是提供标签，具体是否替换需要业务决定，这些标签只是给业务提供决定是否替换的依据。) <br/>

### 占位图填充模式说明
填充模式分为四种： <br/>
A、不缩放 <br/>
B、拉伸: 长宽分别拉伸，可能造成长宽比变形。 <br/>
C、黑边: 长宽等比例拉伸，不够的部分填充黑边。 <br/>
D、裁剪: 长宽等比例拉伸，多余的部分裁掉。 <br/>

### 如何设置占位图替换格式/填充模式

#### 一、准备：确认版本 <br/>
1. 确保 PAGViewer 已经更新至 beta 版 2.1.81 或以上。 [<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>

#### 二、设置占位图替换格式/填充模式：<br/>
2. 打开导出面板: “文件”菜单 -> “导出” -> "PAG Panel...". 如下图：<br/>
![导出面板入口](/img/docs/export_panel_entrance.jpg)
<br/>
3. 在导出面板中点击“设置”下的按钮，如下图：<br/>
![时间伸缩](/img/docs/export_panel_setting.jpg)
<br/>
4. 在设置面板中点击“占位图”页，即可设置相应图片图层的替换格式和填充模式，如下图：<br/>
![时间伸缩](/img/docs/image_fill_setting.jpg)
<br/>
6. 点击“确定”结束设置。<br/>