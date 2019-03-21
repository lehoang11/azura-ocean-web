import React from 'react';

class Setting extends React.Component {
    render (){
        return (
            <div className="content-inner setting-us-page">
                <div className="header">
                    <div className="header-title">
                    <h3>Setting</h3>
                    </div>
                </div>

                <div className="setting-content">
                    <div className="us-setting-form">
                        <form>
                        <div className="form-group">
                            <label for="">Tên đầy đủ</label>
                            <input type="text" className="form-control"  placeholder="Tên đầy đủ" />
                        </div>
                        <div className="form-group">
                            <label for="">Tên viết gọn</label>
                            <input type="text" className="form-control"  placeholder="Tên viết gọn" />
                        </div>
                        <div className="form-group">
                            <label for="">Tên viết gọn</label>
                            <input type="text" className="form-control"  placeholder="Tên viết gọn" />
                        </div>

                        <div className="form-group">
                            <label for="">Tên viết gọn</label>
                            <input type="text" className="form-control"  placeholder="Tên viết gọn" />
                        </div>
                        <button type="submit" className="btn btn-success">
                            <span>Register</span>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;