<?php

namespace App\Http\Services;

class GeoposService
{
    public static function getPos($address, $postcode) {
        $address = str_replace(" ", "-", $address);
        $url = "https://api-adresse.data.gouv.fr/search/?q=$address&postcode=$postcode&limit=1";
        $data = file_get_contents($url);
        $json = json_decode($data, true);
        return $json['features'][0]['geometry']['coordinates'];
    }
}
