import Http from '../requst/requst'

// export function login(params) {
//     return Http.post(
//         '/user/auth',
//         params,
//     )
// }


export function siteInfo():any {
    return Http.get<any>(
        '/systemConfig/siteInfo',
    )
}