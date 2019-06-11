import Vue from "vue";

export default Vue.mixin({
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    hideElement(className) {
      document.querySelector(`${className}`).classList.add("app__hide");
    },
    setFullScreen(element) {
      let platform = this.detectClient();
      if (
        platform.indexOf("Win") !== -1 ||
        platform.indexOf("Mac") !== -1 ||
        platform.indexOf("Linu") !== -1
      ) {
        console.log("Desktop detected");
        //Desktop detected
        let userConfirm = confirm("Iniciar aplicação em modo Tela Cheia?");
        if (userConfirm) {
          let html = document.querySelector(`${element}`);
          try {
            if (html.requestFullscreen) {
              html.requestFullscreen();
            } else if (html.mozRequestFullScreen) {
              /* Firefox */
              html.mozRequestFullScreen();
            } else if (html.webkitRequestFullscreen) {
              /* Chrome, Safari and Opera */
              html.webkitRequestFullscreen();
            } else if (html.msRequestFullscreen) {
              /* IE/Edge */
              html.msRequestFullscreen();
            }
          } catch (err) {
            console.error;
          }
        }
      } else {
        console.log("Mobile detected");
      }
    },
    detectClient() {
      /**
       * JavaScript Client Detection
       * Source: http://jsfiddle.net/ChristianL/AVyND/
       * (C) viazenetti GmbH (Christian Ludwig)
       */
      return (function(window) {
        {
          var os, clientStrings;
          var nVer = navigator.appVersion;
          var nAgt = navigator.userAgent;
          var unknown = "-";

          // system
          var os = unknown;
          var clientStrings = [
            { s: "Windows 3.11", r: /Win16/ },
            { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
            { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
            { s: "Windows 98", r: /(Windows 98|Win98)/ },
            { s: "Windows CE", r: /Windows CE/ },
            { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
            { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
            { s: "Windows Server 2003", r: /Windows NT 5.2/ },
            { s: "Windows Vista", r: /Windows NT 6.0/ },
            { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
            { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
            {
              s: "Windows NT 4.0",
              r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            },
            { s: "Windows ME", r: /Windows ME/ },
            { s: "Android", r: /Android/ },
            { s: "Open BSD", r: /OpenBSD/ },
            { s: "Sun OS", r: /SunOS/ },
            { s: "Linux", r: /(Linux|X11)/ },
            { s: "iOS", r: /(iPhone|iPad|iPod)/ },
            { s: "Mac OS X", r: /Mac OS X/ },
            { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: "QNX", r: /QNX/ },
            { s: "UNIX", r: /UNIX/ },
            { s: "BeOS", r: /BeOS/ },
            { s: "OS/2", r: /OS\/2/ },
            {
              s: "Search Bot",
              r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
          ];
          for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
              os = cs.s;
              break;
            }
          }

          var osVersion = unknown;

          if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = "Windows";
          }

          switch (os) {
            case "Mac OS X":
              osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
              break;

            case "Android":
              osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
              break;

            case "iOS":
              osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
              osVersion =
                osVersion[1] + "." + osVersion[2] + "." + (osVersion[3] | 0);
              break;
          }
        }

        window.jscd = {
          os: os,
          osVersion: osVersion
        };

        // Change to element with ID to placehold
        // console.log(window.jscd.os + " " + window.jscd.osVersion);
        return window.jscd.os;
      })(this);
    }
  }
});
