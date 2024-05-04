/**
 * @name Experiments
 * @author Shisuro
 * @authorId 664105253641125901
 * @version 0.0.1
 * @invite qjdFktNQJF
 * @description Experiments quick fix.
 * @website https://shisuro.github.io/
 * @source https://github.com/shisuro/Experiments
 * @updateUrl https://shisuro.github.io/Experiments/Experiments.plugin.js
 */
/*@cc_on
@if (@_jscript)
var shell = WScript.CreateObject("WScript.Shell");
var fs = new ActiveXObject("Scripting.FileSystemObject");
var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
var pathSelf = WScript.ScriptFullName;
shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
} else if (!fs.FolderExists(pathPlugins)) {
shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
} else if (shell.Popup("Should I move myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
fs.MoveFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)));
shell.Exec("explorer " + pathPlugins);
shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
}
WScript.Quit();
@else@*/
module.exports = (() => {
  const config = {
    info: {
      name: "Experiments",
      authors: [
        {
          name: "Shisuro",
          discord_id: "664105253641125901",
          github_username: "shisuro",
        },
      ],
      version: "0.0.1",
      description: "Fix uncached user mentions, including in embeds.",
      github: "https://github.com/shisuro/Experiments",
      github_raw:
        "https://shisuro.github.io/Experiments/Experiments.plugin.js",
    },
    changelog: [
      {
        title: "v0.0.1",
        items: ["Draft"],
      },
    ],
    main: "Experiments.plugin.js",
  };
  
  {let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
  let u = Object.values(c).find(x=>x?.exports?.default?.getUsers && x?.exports?.default?.getCurrentUser).exports.default;
  let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);

  u.getCurrentUser().flags |= 1;
  m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
  try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
  m.find((x)=>x.name === "ExperimentStore").storeDidChange();}
  
})();
/*@end@*/
