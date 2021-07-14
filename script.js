 let d = new Date()

function fun(){
        let months = ["January","Febuary","March","April","May","June","July","August","Septmeber","October","November","Deceber"]
        let prevMonthLastDate = new Date(d.getFullYear(),d.getMonth(),0).getDate();
        let currMonthLastDate = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
        let currentMonthStartIndex = d.getDay();
        let currentMonthEndIndex = new Date(d.getFullYear(),d.getMonth()+1,0).getDay();
        document.querySelector(".date h1").innerHTML = months[d.getMonth()]
        document.querySelector(".date p").innerHTML = d.toDateString()

        let fday = ""

        for(let i=currentMonthStartIndex;i>0;i--)
        {
            fday += `<div class="prev-date">${prevMonthLastDate-i+1}</div>`
        }
        for(let i=1;i<=currMonthLastDate;i++)
        {
            if(i==d.getDate())
            {
                fday += `<div class="today">${i}</div>`
            }
            else
            {
                fday += `<div>${i}</div>`
            }
        }
        for(let i=1;i<=7-currentMonthEndIndex;i++)
        {
            fday += `<div class="next-date">${i}</div>`
        }
        document.querySelector(".days").innerHTML = fday
       
        
    };

    document.querySelector(".prev").addEventListener("click",()=>{
        d.setMonth(d.getMonth()-1)
        fun()
    })
    
    document.querySelector(".next").addEventListener("click",()=>{
        d.setMonth(d.getMonth()+1)
        fun()
    })    


fun()

    


