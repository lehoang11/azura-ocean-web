import React from 'react';

class About extends React.Component {
    render (){
        return (
            <div className="content-inner about-us-page">
                <div className="header">
                    <div className="header-title">
                    <h3>Giới thiệu</h3>
                    </div>
                </div>
                <div className="edu-about-content xy-col-5">
                    <div className="edu-info">
                        <p>Ngày tạo :20/5/2012</p>
                        <p>Email :chrislehoang@gmail.com</p>
                    </div>
                    <div className="edu-des">
                      University stofond là trường đại học danh tiếng tại caforida nước Mỹ. 
                      Ngôi trường được thành lập từ năm 1850, đạo tạo thành công hàng 100.000 tiến sĩ, và hơn 10 triệu cử nhân,
                      Chất lượng đạo tạo của chúng tôi là hàng đầu thế giới cả đầu ra và đầu vào .
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default About;