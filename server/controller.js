pushIt = (res, req) => {
    let fortunes = ["You will win the lottery",
            "Great food will fall from the sky",
          "Your house will disapear next time you leave",
          "A good time to finish up old tasks", 
          "Advice, when most needed, is least heeded."]
    fortunes = fortunes.push(res.data)
    res.status(200).send(fortunes)
  }