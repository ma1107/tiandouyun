//功能：正则验证
//参数：
// 验证类型
//		（如：用户名，email，手机号码，身份证号码，密码）
//       username:表示用户名;
//       email:表示邮箱
//       phoneNumber:手机号码；
//       personId:身份证号码；
//       password:密码;
// 要验证的字符串
//返回值：true：验证通过，false：
function yonghu(type,value){
	var reg=null;
	switch(type){
		//用户名格式要求：（只能出现字母。数字。下划线，必须包含字母
		//和数字，不能有特殊符号，汉字，不能以数字来头，长度6-16）
		case "username":reg=/^[a-zA-Z_]\w{5,15}$/;break;
		//邮箱地址的规则：以若干个数字字母下划线开头@若干个数字字母。以com,cn,net结尾
		case "email":reg=/^\w@[a-zA-Z0-9]+\.(com|cn|net)$/;break;
		//手机号码
		case " phoneNumber":reg=/^1(3|5|7|8|9)\d{9}$/;break;
		//身份证号码：第一位数不能为0，最后一位是数字或Xx
		case " person":reg=/^[1-9]\d{16}(\d|x|X)$/;break;
		//密码:只能出现字母。数字。下划线，必须包含字母
		//和数字，不能有特殊符号，不能以数字来头，长度6-16）
		case " password":reg=/^[a-zA-Z_]\w{5,15}$/;break;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;
}