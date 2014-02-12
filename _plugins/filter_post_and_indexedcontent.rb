require 'rubygems'
require 'nokogiri'

module Jekyll
  module PreviewFilter
    def cleanhtml(html)
       # TODO : Optimisation with remove current word
       Nokogiri::HTML(html).text.gsub(/[^a-zA-Zéèàùêôû ]/, " ")
    end
  end
end

Liquid::Template.register_filter(Jekyll::PreviewFilter)
