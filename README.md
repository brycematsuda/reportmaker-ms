ReportMakerMS (temporary name)
==============================
ReportMakerMS (temporary name) is a player abuse report generator for the MMORPG "MapleStory."

Background
==============================
On the MapleStory forums, there is a subforum dedicated to reporting player abuse (hacking, botting, illegal advertising, etc.) for review by game moderators at Nexon America. The [preferred report format](http://maplestory.nexon.net/community#%2Fshowthread.php%3F1282451-READ-ME-quot-Moderator-Contact-quot-Posting-Guidelines%26nxid%3D6) is as followed:

- Reported Character's Name:
- World:
- Channel:
- Map:
- Approximate Time and Date of Incident:
- Description of Incident:
- Additional images/video:


Having to manual copy this format and type in information for every report gets increasingly repetitive. Using Angular's data binding, ReportMakerMS generates a report that can be simply copy-pasted for quick reporting.

Installation
==============================

```sh
# install gulp and its dependencies listed in package.json
$ npm install

# install front-end libraries listed in bower.json
$ bower install
```
Usage
==============================
1. Use application by opening `index.html` in your favorite browser.
2. Fill out information as best as possible in the form on the left. The output report is immediately generated on the right.
3. The purpose of the first output line is to serve as the forum thread. The rest is to be copy-pasted into the forum thread body.
4. To clear form/report, click "Clear" button.
5. The reporter's IGN and game world can be changed in `src/controller.js` under `$scope.ign` and `$scope.world`. This will be hopefully changed in a future release.

Code Changes
==============================
Do all JS/SCSS changes in the `src/` folder. Then in the root directory run `gulp` to apply changes (concatenated and minified) to the output `public/` directory.

To-Do
==============================
- Expand report types beyond advertiser bots and meso farmer Demon Slayer bots.
- Add copy to clipboard function.
- Add more popular advertiser / bot maps.