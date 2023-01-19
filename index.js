function findMatching(array, string) {
    // console.log(array)
    // console.log(string)
   return array.filter(function (driverName) {
        return string.toLowerCase() === driverName.toLowerCase()

    });

}

function fuzzyMatch(array, string) {
    // console.log(array)
    // console.log(string)
    return array.filter(function (driverName) {
        return driverName.slice(0, 2) === string
    })
}

function matchName(driver, string) {
    // console.log(driver)
    // console.log(string)
    return driver.filter(function (driverObject) {
        return driverObject["name"] === string
    })

}