import './addon'
import './pml.scss'

global.CodeMirror.defineSimpleMode("pml", {
  // The start state contains the rules that are intially used
  start: [
    {regex: /@[a-z]+(:[a-z]+)?/, token: "pml-alias"},
    {regex: /&[0-9\-]+/, token: "pml-date"},
    {regex: /\[-\][a-zA-Z ]+/, token: "pml-todo"},
  ],
});

// CodeMirror.defineMIME("text/x-diff", "diff");
//
// });
