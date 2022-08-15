export const formatDate = (date) => {
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }
  return new Intl.DateTimeFormat("ru", options).format(new Date(date))
}

export const formatDateInterval = (dateStart, dateFinish) => {
  const dS = formatDate(dateStart)
  const dF = formatDate(dateFinish)

  return `${dS}–${dF}`
}

export const formatPrice = (price) =>
  new Intl.NumberFormat("ru-RU").format(price)

export const getISO8601Date = () =>
  new Date().toISOString().slice(0, 19).replace("T", " ")

export const downloadFile = (name, blob) => {
  const link = document.createElement("a")
  link.download = name
  link.href = URL.createObjectURL(blob)
  link.click()

  setTimeout(() => {
    URL.revokeObjectURL(blob)
    link.removeAttribute("href")
  }, 0)
}

export const randomFloat = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

// integer
export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomColor = () =>
  "#" + (Math.random().toString(16) + "00000").slice(2, 8)

export const getValues = (values) =>
  Object.fromEntries(Object.entries(values).map((a) => [a[0], a[1].value]))
