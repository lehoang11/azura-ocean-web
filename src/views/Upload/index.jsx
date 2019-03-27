import React from "react"
import Header from "../../components/Header/Header"
import Aside from "../../components/MenuBar/Aside"

class Upload extends React.Component {

    render () {
        
        return (
            
        <div id="wrapper">
            <Header />
            <Aside /> 
            <div id="content">

                <div className="upload-page">
                    <div className="upload-wrap">
                        
                        <div className="upload-video-wrap">
                            <div className="form-file">
                                <div className="thumb-upload">
                                    <div class="media-btn-wrapper">
                                    <button class="btn">Upload a video or mp3</button>
                                    <input type="file" name="myfile" />
                                    </div>
                                </div>
                            </div> 
                            <div className="form-media">
                                <div className="video-wrap">
                                video
                                </div>
                                <div className="form-text">
                                <form>
                                    <div class="form-group">
                                        <label for="usr">Tiêu đề:</label>
                                        <input type="text" class="form-control" id="usr" />
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Mô tả</label>
                                        <textarea class="form-control" rows="5" id="description"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="status">Trạng thái</label>
                                        <select class="form-control" id="status">
                                            <option>public</option>
                                            <option>private</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="usr">Từ khóa</label>
                                        <input type="text" class="form-control" id="usr" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="usr" value="https://vimeo.com/user95420702/review/320159398/e60194a5f8" />
                                    </div>
                                    <div className ="form-group">
                                        <label className ="col-md-3 control-label"></label>
                                        <div className ="col-md-8">
                                        <input type="button" className ="btn btn-info" value="Save" />
                                        <span></span>
                                        <input type="reset" className ="btn btn-default" value="Cancel" />
                                        </div>
                                    </div>
                                </form>
                                </div>
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