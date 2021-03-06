class AdsController < ApplicationController
  before_action :check_logged_in, :only => [:edit, :update, :delete]
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
    if @ad.save
      redirect_to "/ads/#{@ad.id}"
    else
      render :template => "/ads/new"
    end
  end

  def edit
    @ad= Ad.find(params[:id])
  end

  def update
    @ad = Ad.find(params[:id])
    if @ad.update_attributes(allowed_params)
      redirect_to "/ads/#{@ad.id}"
    else
      render :template =>"/ads/edit"
    end

  end

  def destroy
    @ad = Ad.find(params[:id])
    @ad.destroy
    redirect_to "/ads/"

  end

  private
  def allowed_params
    params.require(:ad).permit(:name, :description, :price, :seller_id, :email, :img_url)
  end

  def check_logged_in
    authenticate_or_request_with_http_basic("Ads") do | username, password |
      username == "admin" && password == "password"
    end
  end
end
