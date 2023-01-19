<?php

namespace App\Http\Services;

use App\Models\User;
use Exception;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use stdClass;

class TokenService {

    public static function generate(User $user): string {
        $publicKey = file_get_contents(base_path('key.pub'));
        $paylod = [
            'id' => $user->id,
            'ait' => time(),
            'exp' => time() + 3600 * 24 * 31
        ];
        return JWT::encode($paylod, $publicKey, 'HS256');
    }

    /**
     * @throws Exception
     */
    public static function decode(string $token): int
    {
        $publicKey = file_get_contents(base_path('key.pub'));
        $key = new Key($publicKey, 'HS256');
        try {
            return JWT::decode($token, $key, ['HS256'])->id;
        } catch (ExpiredException $expiredException) {
            throw new ExpiredException('Le token JWT a expiré');
        } catch (Exception $exception) {
            throw new Exception('Le token est invalide ');
        }
    }
}
