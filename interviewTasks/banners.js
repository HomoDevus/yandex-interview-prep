// function getBanners(banners) {
//   let callCount = 0
//   let completeWeight = 0
//
//   for (let banner of banners) {
//     completeWeight += banner.w
//   }
//
//   let bannersWithProbability = banners.map(banner => ({
//     ...banner,
//     probability: banner.w / completeWeight
//   })).sort((bannerA, bannerB) => bannerA.probability - bannerB.probability)
//
//   function getRandomBanner(banners) {
//     let randomNumber = Math.random()
//     console.log(randomNumber)
//     for (let i = 0; i < banners.length; i++) {
//       let banner = banners[i]
//       if (i === 0 && banner.probability > randomNumber) {
//         return banner
//       }
//
//       if (banner.probability > randomNumber && nextBanner.probability < randomNumber)
//     }
//   }
//
//   return function () {
//     return getRandomBanner(bannersWithProbability)
//   }
// }
//
// const getBannersStarter = getBanners([{w: 10, banner: {id: 1}}, {w: 50, banner: {id: 2}}])
//
// for (let i = 0; i < 10; i++) {
//   console.log(getBannersStarter())
// }

function getBanner(banners) {
  let completeWeight = 0
  let sortedBanners = banners.sort((bannerA, bannerB) => bannerA.w - bannerB.w)

  for (let banner of banners) {
    completeWeight += banner.w
  }
  let randomWeight = Math.random() * completeWeight

  for (let banner of sortedBanners) {
    if (randomWeight < banner.w) {
      return banner
    }
  }

  return sortedBanners.at(-1)
}


for (let i = 0; i < 10; i++) {
  console.log(getBanner([{w: 10, banner: {id: 1}}, {w: 50, banner: {id: 2}}]))
}


