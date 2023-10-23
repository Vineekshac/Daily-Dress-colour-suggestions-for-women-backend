class movie {
    constructor(t, s, r) 
    {
      this.title = t;
      this.studio = s;
      this.rating = r;
    }
    setrating(t,s,r)
    {
        this.title = t;
        this.studio = s;
        this.rating="PG"
    }
     
    getPG(t,s,r)
    {
        pgMov = new movie[mov.length];
        let newArrayIndex = 0;
        for (let i = 0; i < mov.length; i++) 
        {
            if (mov[i].rating.equals(this.r)) 
            {
                pgMov[newArrayIndex] = mov[i];
                 newArrayIndex++;
            }
        }
        return pgMov;
    }
};
const mov = new movie("Casino Royale","Eon Productions","PG­13")
console.log(mov) 
        
  
    

 
