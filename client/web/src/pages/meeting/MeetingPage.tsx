import React, { useEffect } from "react";

import { ZoomMtg } from "@zoomus/websdk";

// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.6.0/lib", "/av");

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load("en-US");
// ZoomMtg.i18n.reload("en-US");

const MeetingPage = () => {
  // document.getElementById("zmmtg-root").style.display = "none";
  // // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  var signatureEndpoint = "http://localhost:4000";
  // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
  var sdkKey = "aI8eBOpQKSoulvEpydKIPNb8bsMWCWhuBaTG";
  var meetingNumber = "81754254237";
  var role = 0;
  var leaveUrl = "http://localhost:3000";
  var userName = "React";
  var userEmail = "";
  var passWord = "HACiz1";
  // // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
  // // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
  var registrantToken = "";

  function getSignature(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    fetch(signatureEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        // startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // function startMeeting(signature: string) {
  //   document.getElementById("zmmtg-root").style.display = "block";

  //   ZoomMtg.init({
  //     leaveUrl: leaveUrl,
  //     success: (success: boolean) => {
  //       console.log(success);

  //       ZoomMtg.join({
  //         signature: signature,
  //         meetingNumber: meetingNumber,
  //         userName: userName,
  //         sdkKey: sdkKey,
  //         userEmail: userEmail,
  //         passWord: passWord,
  //         tk: registrantToken,
  //         success: (success: boolean) => {
  //           console.log(success);
  //         },
  //         error: (error: Error) => {
  //           console.log(error);
  //         },
  //       });
  //     },
  //     error: (error: Error) => {
  //       console.log(error);
  //     },
  //   });

  //   useEffect(() => {
  //     getSignature();
  //     console.log("hihihihihi");
  //   }, []);
  // }

  return (
    <div>
      <button onClick={getSignature}>start meeting!!!!</button>
    </div>
  );
};

export default MeetingPage;
