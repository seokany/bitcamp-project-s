package bitcamp.java89.ems2.domain;

public class Video extends ContentsHeader{
  
  private static final long serialVersionUID = 1L;
  
  protected String koreanTitle;
  protected String englishTitle;
  protected Object videoImage;
  protected String videoDescription;
  protected String speakerName;
  protected String speakerJob;
  protected String speakerImage;
  protected boolean checked;
  protected int posted;
  public String getKoreanTitle() {
    return koreanTitle;
  }
  public void setKoreanTitle(String koreanTitle) {
    this.koreanTitle = koreanTitle;
  }
  public String getEnglishTitle() {
    return englishTitle;
  }
  public void setEnglishTitle(String englishTitle) {
    this.englishTitle = englishTitle;
  }
  public Object getVideoImage() {
    return videoImage;
  }
  public void setVideoImage(Object videoImage) {
    this.videoImage = videoImage;
  }
  public String getVideoDescription() {
    return videoDescription;
  }
  public void setVideoDescription(String videoDescription) {
    this.videoDescription = videoDescription;
  }
  public String getSpeakerName() {
    return speakerName;
  }
  public void setSpeakerName(String speakerName) {
    this.speakerName = speakerName;
  }
  public String getSpeakerJob() {
    return speakerJob;
  }
  public void setSpeakerJob(String speakerJob) {
    this.speakerJob = speakerJob;
  }
  public String getSpeakerImage() {
    return speakerImage;
  }
  public void setSpeakerImage(String speakerImage) {
    this.speakerImage = speakerImage;
  }
  public boolean getChecked() {
    return checked;
  }
  public void setChecked(String checked) {
    if (checked != null) {
      this.checked = true;
    }
    this.checked = false;
  }
  public int getPosted() {
    return posted;
  }
  public void setPosted(int posted) {
    this.posted = posted;
  }
  @Override
  public String toString() {
    return "Video [koreanTitle=" + koreanTitle + ", englishTitle=" + englishTitle + ", videoImage=" + videoImage
        + ", videoDescription=" + videoDescription + ", speakerName=" + speakerName + ", speakerJob=" + speakerJob
        + ", speakerImage=" + speakerImage + ", posted=" + posted + "]";
  }
}
