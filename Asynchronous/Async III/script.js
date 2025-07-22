// function orderFood(){
//   const x = Math.random() < .6
//   return new Promise((res, rej)=>{
//     setTimeout(()=>{
//       if(x){
//         res()
//       }else{
//         rej()
//       }
//     }, 2000)
//   })
// }

// orderFood().then(()=>{
//   console.log('🍕 Pizza delivered!');
// })
// .catch(()=>{
//   console.log('🚫 Delivery failed');
// })


// function getUser(){
//   return new Promise((res, rej)=>{
//     setTimeout(()=>{
//       res({id: 1, name: 'Ali'})
//     }, 1000)
//   })
// }

// function getPosts(userId){
//   return new Promise((res, rej)=>{
//     setTimeout(()=>{
//       res(['title - 1', 'title - 2'])
//     }, 1000)
//   })
// }


// function getComments(postId){
//   return new Promise((res, rej)=>{
//     setTimeout(()=>{
//       res(['great post', 'amazing content', 'great work'])
//     }, 1000)
//   })
// }

// getUser()
// .then((data)=>{
//   console.log(`data fetched: ${data.name}`);
//   return getPosts(data.id)
// })
// .then((titles)=>{
//   console.log(titles[1])
//   return getComments('hey')
// })
// .then((cmts)=>{
//   console.log(cmts)
// })
// .finally(()=>{
//   console.log('all data fetched...')
// })



function fakeApiCall(endpoints){
  const data = {
    users: ['Ali', 'Samir', 'Raja', 'Irfan'],
    posts: ['Nice', 'Amazing', 'Great', 'Good Job']
  } 
  let delay = Math.round(Math.random() * 2000 + 1000)  

  return new Promise((res, rej)=>{
    setTimeout(()=>{
      res(data[endpoints])
    }, delay)
  })
}

fakeApiCall('users')
.then((data)=>{
  console.log(data);
})

fakeApiCall('posts')
.then((data)=>{
  console.log(data)
})
