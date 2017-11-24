import { helper } from '@ember/component/helper';

export function degreeType(type) {

    switch (parseInt(type)) {
        case 1:
            return "Predominantly certificate-degree granting";
            break;
        case 2:
            return "Predominantly associate's-degree granting";
            break;
        case 3:
            return "Predominantly bachelor's-degree granting";
            break;
        case 4:
            return "Entirely graduate-degree granting";
            break;
        default: // also case 0
            return "Not classified";
    }

}

export default helper(degreeType);
