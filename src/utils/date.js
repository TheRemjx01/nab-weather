const getDay = (dateString) => {
 const date = new Date(dateString)
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

 return days[date.getDay()]
}

export default getDay;