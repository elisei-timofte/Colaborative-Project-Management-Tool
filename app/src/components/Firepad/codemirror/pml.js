import './addon'

global.CodeMirror.defineSimpleMode("pml", {
  // The start state contains the rules that are intially used
  start: [
    {regex: /@[a-z]+/, token: "pml-alias"},
    {regex: /&[0-9\-]+/, token: "pml-date"},
  ],
});

// CodeMirror.defineMIME("text/x-diff", "diff");
//
// });
