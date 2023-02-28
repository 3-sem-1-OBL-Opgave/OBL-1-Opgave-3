Vue.createApp({

    data() {

        return {
            word: null,
            orderedList: [],
            message: null,
        }

    },

    methods: {
        
        showLastWordInUpperCase(word){
            lastChar = word.split("").reverse().join("").charAt(0).toUpperCase();
            restOfWord = word.toLowerCase().split("").reverse().join("").slice(1)
            reverseWord = lastChar+restOfWord;
            this.orderedList.push(this.message = reverseWord.split("").reverse().join(""));
        },
        
        show(word){
            this.word = word;
            this.orderedList.push(this.message = word);
            this.orderedList.push(this.message.toUpperCase(word));
            this.orderedList.push(this.message.toLowerCase(word));
            this.orderedList.push(this.message = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1));
            //this.showLastWordInUpperCase(word);
            this.orderedList.push(this.message = word.toLowerCase().slice(0,word.length-1) + word.charAt(word.length-1).toUpperCase());
            this.orderedList.push(this.message = word.split("").reverse().join(""));
        },

        Clear(){
            this.orderedList = []
            this.Show();
        }

        /*
        show(word){
            if(word)
                this.message = wo   rd
            else
                this.message = "No word"
        } 
        
        yay (input) {          
            input = input.toLowerCase().split("").reverse().join("").split(" ");
            for(var i = 1 ; i < input.length ; i++){
              var len = input[i].length-1;
              input[i] = input[i].substring(0, len) + input[i].substr(len).toUpperCase();
            }
            return input.reverse().join(" ");
          },

        
        firstLetterUpperCase(word){
            this.word.charAt(0).toUpperCase();
        }
        */

    }

}).mount("#app")