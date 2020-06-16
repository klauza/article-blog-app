
const transformDate = (date) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 
  return `${day}-${month}-${year }`
}


const cookingArticles = [
  {
    id: 0,
    img: "https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Learn how to cook a cake",
    desc: "some html paragraph",
    added: transformDate(new Date('2010-08-05'))
  }
]

export default cookingArticles;