import './addon'
import './pml.scss'

global.CodeMirror.defineSimpleMode("pml", {
  // The start state contains the rules that are intially used
  start: [
    {regex: /@[a-z]+(:[a-z]+)?/, token: "pml-alias"},
    {regex: /#[a-z]+(:[a-z]+)?/, token: "pml-tag"},
    {regex: /&[0-9\-]+/, token: "pml-date"},
    {regex: /\[-\][a-zA-Z ]+/, token: "pml-task"},
    {regex: /.+>>>.+(?<!\\)$/, token: "pml-message"},
    {regex: /.+>>>.+\\$/, token: "pml-message", next: "pml-message"},
    {regex: /\/\/.*/, token: "comment"},
    {regex: /\/\*/, token: "comment", next: "comment"},
  ],
  "pml-message": [
    {regex: /.+(?<!\\)$/, token: "pml-message", next: "start"},
    {regex: /.+\\$/, token: "pml-message"},
  ],
  comment: [
    {regex: /.*?\*\//, token: "comment", next: "start"},
    {regex: /.*/, token: "comment"}
  ],
});

export default global.CodeMirror;
