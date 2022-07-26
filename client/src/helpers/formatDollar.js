export const formatDollar = (val) => {
  parseFloat(val).toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2})
}