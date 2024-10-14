let score=[42,55,95,78,35,38,84,20,30,45]
let count=0;
for(i=0;i<score.length;i++){
    if(score[i]<40){
        score[i]+=20;
    }
    if(score[i]>90){
        score[i]=90;
    }
    if(score[i]>=50){
        count++;
    }
    
    
}

console.log(score);
console.log(count);