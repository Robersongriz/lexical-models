/*
  Ppredictive text model for Jola Fongy (dyo, Senegal), based on a word list.
  
  Derived from Paratext Wordlist for project JFNRT
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['wordlist.tsv'],,
  punctuation: {
    quotesForKeepSuggestion: {
      open: "\u00AB",
      close: "\u00BB"
    }
  }
};
export default source;
