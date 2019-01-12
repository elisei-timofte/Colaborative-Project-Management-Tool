global.CodeMirror.defineMode("pml", function() {
  return {
    startState: function() {return {inString: false};},
    token: function(stream, state) {
      console.log(stream.string);
      // If a string starts here
      if (!state.inString && stream.peek() === '"') {
        stream.next();            // Skip quote
        state.inString = true;    // Update state
      }

      if (state.inString) {
        if (stream.skipTo('"')) { // Quote found on this line
          stream.next();          // Skip quote
          state.inString = false; // Clear flag
        } else {
           stream.skipToEnd();    // Rest of line is string
        }
        return "string";          // Token style
      } else {
        stream.skipTo('"') || stream.skipToEnd();
        return null;              // Unstyled token
      }
    }
  };
});

global.CodeMirror.defineMode("diff", function() {

  var TOKEN_NAMES = {
    '+': 'positive',
    '-': 'negative',
    '@': 'meta'
  };

  return {
    token: function(stream) {
      var tw_pos = stream.string.search(/[\t ]+?$/);

      if (!stream.sol() || tw_pos === 0) {
        stream.skipToEnd();
        return ("error " + (
          TOKEN_NAMES[stream.string.charAt(0)] || '')).replace(/ $/, '');
      }

      var token_name = TOKEN_NAMES[stream.peek()] || stream.skipToEnd();

      if (tw_pos === -1) {
        stream.skipToEnd();
      } else {
        stream.pos = tw_pos;
      }

      return token_name;
    }
  };
import './addon'
});

// CodeMirror.defineMIME("text/x-diff", "diff");
//
// });
