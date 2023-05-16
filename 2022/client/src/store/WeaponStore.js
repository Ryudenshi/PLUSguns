import {makeAutoObservable} from "mobx";

export default class WeaponStore{
    constructor() {
        this._types = []
        this._brands = []
        this._weapons = []
        this._baskets = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedWeapon = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setBaskets(basket){
        this._baskets = basket
    }

    setWeapons(weapons){
        this._weapons = weapons
    }
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }
    setSelectedWeapon(weapon){
        this.setPage(1)
        this._selectedWeapon = weapon
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._selectedCount = count
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get weapons(){
        return this._weapons
    }
    get basket(){
        return this._baskets
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get selectedWeapon(){
        return this._selectedWeapon
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}