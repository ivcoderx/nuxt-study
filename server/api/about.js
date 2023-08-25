export default defineEventHandler(async () => {

    // handle query params
    // const { name } = useQuery(event)
    // console.log('event: ', useQuery(event))
    // handle post data
    // const { age } = await useBody(event)

    // return {
    //     message: `Hello, {name}! You are {age} years old.`
    // }

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_7KXAiyJHFPBQSxZS5bQbNzRMVQfL58Kf4y5v1PLp&currencies=EUR%2CUSD%2CCAD')

    return data
})