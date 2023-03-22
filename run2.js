#!/bin/sh
UUID=${UUID:-'cdb0aa7d-5be3-4669-83dd-ed9fe1f97a3f'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
