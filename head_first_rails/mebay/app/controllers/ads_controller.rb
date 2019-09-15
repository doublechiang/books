class AdsController < ApplicationController
  def show
#    p params
    @ad = Ad.find(params[:id])
  end

  def index
    # find all deprecated in Rails.
    @ads = Ad.find_each
  end

  def new
    @ad = Ad.new
  end

  def create
    @ad= Ad.new(allowed_params)
    @ad.save
    redirect_to "/ads/#{@ad.id}"
  end

  def edit
    @ad= Ad.find(params[:id])
  end

  def update
    @ad = Ad.find(params[:id])
    @ad.update_attributes(allowed_params)
    redirect_to "/ads/#{@ad.id}"

  end

  private
  def allowed_params
    params.require(:ad).permit(:name, :description, :price, :seller_id, :email, :img_url)
  end
end
