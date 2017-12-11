import { helper } from '@ember/component/helper';

export function degreeType(type) {
    let _type = null;
    switch (parseInt(type)) {
        case 1:
            _type = "Predominantly certificate-degree granting";
            break;
        case 2:
            _type = "Predominantly associate's-degree granting";
            break;
        case 3:
            _type = "Predominantly bachelor's-degree granting";
            break;
        case 4:
            _type = "Entirely graduate-degree granting";
            break;
        default: // also case 0
            _type = "Not classified";
    }
    return _type;
}

export default helper(degreeType);
