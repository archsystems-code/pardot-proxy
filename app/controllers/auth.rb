get '/' do
  erb :welcome
end

get '/cart-checkout' do
  client = Pardot::Client.new ENV['EMAIL'], ENV['PASSWORD'], ENV['KEY']
  user_id = params[:userId]
  client.emails.send_to_list('list_ids[]' => '98751')
end

