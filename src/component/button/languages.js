import burpee from '../../images/burpee.jpg'
import pushup from '../../images/pushups.jpg'
import situp from '../../images/situp.jpg'
import sideLunge from '../../images/sideLunge.jpg'
import plank from '../../images/plank.jpg'
import lunge from '../../images/lunge.jpg'
import twist from '../../images/twist.jpg'
import squat from '../../images/squat.jpg'
import sidePlank from '../../images/sidePlank.mp4'
import vUp from '../../images/vUp.mp4'
import rain from '../../images/rain.mov'


export const exercises = [
  { exercise: "Push-Ups",
    duration: "10",
    image: pushup,
    video: rain
  },
  { exercise: "Sit-Ups",
    duration: "25",
    image: situp,
    video: vUp
  },
  { exercise: "Squats",
    duration: "BW x 25'",
    image: squat,
    video: rain
  },
  { exercise: "Side Lunges",
    duration: "BW x 10 Each",
    image: sideLunge,
    video: rain
  },
  { exercise: "Plank",
    duration: "60 sec, 45 sec, 45 sec",
    image: plank,
    video: sidePlank
  },
  { exercise: "Lunge",
    duration: "BW 10 x Each",
    image: lunge,
    video: rain
  },
  { exercise: "Russian Twist",
    duration: "30 Total",
    image: twist,
    video: rain
  },
  { exercise: "Burpees",
    duration: "10 Total",
    image: burpee,
    video: rain
  }
]
