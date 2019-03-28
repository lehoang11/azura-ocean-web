import React from "react"

class Upload extends React.Component {

    render () {
        return (
            <div className="page-wrapper">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-xlg-9 col-md-7">
                            <div className="card">
                                <div className="card-body">
                                    <div className="upload-page-wrapper">
                                        <div className="video-upload-wrap">
                                            <div className="btn-video-wrap">
                                            <div className="video-btn-wrapper">
                                                <button className="btn">Upload a video or mp3</button>
                                                <input type="file" name="myfile" />
                                                </div> 
                                            </div>
                                            <div className="show-video-upload">
                                                show video upload
                                            </div>
                                            
                                        </div>
                                        <div className="image-upload-wrap">
                                            <div className="btn-img-upload">
                                                <div className="image-btn-wrapper">
                                                    <button className="btn">Upload avatar video
                                                    </button>
                                                    <input type="file" name="myfile" />
                                                </div>
                                            </div>
                                            <div className="show-img-upload">
                                                show image
                                            </div>
                                            
                                        </div>

                                        
                                        <div className="form-upload">
                                            <form className="form-horizontal pt-3">
                                                <div className="form-group row">
                                                    <label htmlFor="username" className="col-sm-3 control-label">Tiêu đề*</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" id="username" placeholder="Tiêu đề" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="username" className="col-sm-3 control-label"> Link Video*</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" id="username" placeholder="Link video" disabled="" value="https://vimeo.com/user95420702/review/320159398/e60194a5f8" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label for="username" className="col-sm-3 control-label">Trạng thái*</label>
                                                    <div className="col-sm-9">
                                                        <select className="form-control">
                                                            <option value="1">public</option>
                                                            <option value="1">private</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="username" className="col-sm-3 control-label">Từ khóa*</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" id="key_word" placeholder="Từ khóa" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label for="username" className="col-sm-3 control-label">Từ khóa*</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" id="key_word" placeholder="Từ khóa" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-3 control-label">
                                                        Mô tả
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <textarea name="ckeditor" id="ckeditor" style={{width:'100%'}} rows="5" className="ckeditor"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb-0">
                                                    <div className="offset-sm-3 col-sm-9">
                                                        <button type="submit" className="btn btn-info waves-effect waves-light">Chia sẽ</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div> 
                                </div> 
    
                            </div>
                        </div>

                        <div class="col-lg-4 col-xlg-3 col-md-5">
                            <div class="card">
                                <div class="card-body" style={{minHeight:'800px'}}>
                                    <div class="card-title">Pa Adonis Le</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Upload;