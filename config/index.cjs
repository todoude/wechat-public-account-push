/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0179f2a004173dc6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a5303260145707b9872dbd3da540c2f2',
  //模板消息id
  TEMPLATE_ID:"khLpffmMsToJ_NUwBiwpd-lTPr4TCr2wf0dd0FwTXY0''

  PROVINCE: '辽宁',
  CITY: '大连',

  USERS: [ toGIe_6kwNRSO005wMNAXX0sZjJhU，oGIe_6qz244IXObZUzs2zaO50SuQ
    {
      // 想要发送的人的名字
      name: '花生猪猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'toGIe_6kwNRSO005wMNAXX0sZjJhU，',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '花生猪猪', year: '2003', date: '04-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '花生猪猪', year: '2003', date: '05-27',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2020', date: '11-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-11-10' },
        // 二周年
        { keyword: '2nd anniver', date: '2022-11-10' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: ' TEMPLATE_ID:"khLpffmMsToJ_NUwBiwpd-lTPr4TCr2wf0dd0FwTXY0',

  CALLBACK_USERS: [oGIe_6qz244IXObZUzs2zaO50SuQ，oGIe_6kwNRSO005wMNAXX0sZjJhU
    {
      name: '花生猪猪',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGIe_6kwNRSO005wMNAXX0sZjJhU',oGIe_6qz244IXObZUzs2zaO50SuQ
    }
  ],

}

module.exports = USER_CONFIG

